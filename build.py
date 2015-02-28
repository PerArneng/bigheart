import subprocess
import os
import fnmatch
import sys
import argparse


script_extension = ''
if os.name == 'nt':
    script_extension = '.bat'

MONKEYC = 'monkeyc' + script_extension
MONKEYDO = 'monkeydo' + script_extension
PACKAGER = 'connectiqpkg' + script_extension

BUILD_DIR = os.path.dirname(os.path.abspath(__file__))
PROGRAM_NAME = os.path.basename(BUILD_DIR)

RESOURCE_DIR = 'resources'
SOURCE_DIR = 'src/main/mc'
TARGET_DIR = 'target'
BIN_DIR = 'bin'

OUTPUT_FILENAME = os.path.join(BIN_DIR, PROGRAM_NAME + '.prg')
MANIFEST_FILE = 'manifest.xml'


def print_command(cmd, title=''):
    print
    print title
    print '=' * 80
    print ' '.join(cmd)
    print '=' * 80
    print


def glob_tree(root, pattern=''):
    """Given a root directory and a function matching `pattern`,
    this will recursively search for files that match `pattern`"""
    return [os.path.join(dirpath, filename) 
            for dirpath, subdirs, filenames in os.walk(root)
                for filename in fnmatch.filter(filenames, pattern)]

def compile(sources, output_filename, manifest_file, args):
    # compile command
    cmd = [
        MONKEYC,
        '-o', os.path.relpath(output_filename),
        '-w',
        '-m', os.path.relpath(manifest_file),
        '-z', ';'.join(resources),
    ]
    if args.device:
        cmd.append('-d')
        cmd.append(args.device)
    if args.release:
        cmd.append('-r')

    cmd.extend(sources)
    # compile things
    print_command(cmd, title='Compile Command')
    return subprocess.call(cmd)    


def extract_ecmascript(sources):

    print_command(sources, title='Extracting Ecmascript')

    for source in sources:
        basename = os.path.basename(source)
        target = "%s/%s.js" % (TARGET_DIR, basename)
        jsFile = open(target, 'w')
        inES = False

        for line in open(source).read().splitlines():
            if '</ecmascript>' in line:
                inES = False

            if inES:
                jsFile.write('%s\n' % (line))

            if '<ecmascript>' in line:
                inES = True

        jsFile.close()



if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    
    parser.add_argument('-d', '--device', default=None, help='The id of the device to build for')
    parser.add_argument('--no-clean', action='store_true', help="Don't clean out the bin directory.")
    parser.add_argument('--no-sim', action='store_true', help="Don't run the simulator after compiling.")
    parser.add_argument('-r', '--release', action='store_true')
    parser.add_argument('-p', '--package', action='store_true', help='Run the packager')
    parser.add_argument('-n', '--name', default=None, required=True, help='Run the packager')

    args = parser.parse_args()

    PROGRAM_NAME = args.name
    OUTPUT_FILENAME = os.path.join(BIN_DIR, PROGRAM_NAME + '.prg')

    print "Program Name: %s" % (PROGRAM_NAME)

    resources = [os.path.relpath(path) for path in glob_tree(RESOURCE_DIR, '*.xml')]
    sources = [os.path.relpath(path) for path in glob_tree(SOURCE_DIR, '*.mc')]

    # clean the bin dir first
    if not args.no_clean:
        to_clean = glob_tree(BIN_DIR, '*')
        for f in to_clean:
            print 'Removing', os.path.relpath(f)
            os.remove(f)

    # clean the target dir first
    if not args.no_clean:
        to_clean = glob_tree(TARGET_DIR, '*')
        for f in to_clean:
            print 'Removing', os.path.relpath(f)
            os.remove(f)

    extract_ecmascript(sources);

    ret = compile(sources, OUTPUT_FILENAME, MANIFEST_FILE, args)
 
    if not ret and args.package:
        cmd = [
            PACKAGER,
            '-o', '.',
            '-m', "'%s'" % (MANIFEST_FILE),
            '-n', PROGRAM_NAME,
            "'%s'" % (OUTPUT_FILENAME)
        ]
        print_command(cmd, title='Package Command')
        subprocess.call(cmd)
    
    # if everything builds correctly, go ahead and try to push to the simulator
    if not ret and not args.no_sim and not args.package:
        cmd = [
            MONKEYDO,
            "'%s'" % (OUTPUT_FILENAME),
        ]
        if args.device:
            cmd.append(args.device)
        print_command(cmd, title='Simulator Command')
        subprocess.call(cmd)
