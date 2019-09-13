import sys
import argparse
import re

def main():
    
    parser = argparse.ArgumentParser()  
    parser.add_argument('-i', '--input', default=None, required=True, help='the path to the es6 file')
    parser.add_argument('-o', '--output', default=None, required=True, help='the target monkeyc file')

    args = parser.parse_args()

    print("es6_to_monkeyc: %s ==> %s" % (args.input, args.output))

    replacements = [
        RegexReplacement(".*//mc:(.*)$", wholeLineReplacement),
        RegexReplacement("(.*)/\*mc:.*\*/(.*)", inPlaceReplacement),
        RegexReplacement(".*this\.[a-zA-Z0-9_]+.*", thisReplacement),
    ]

    convert(args.input, args.output, replacements)

def convert(es6path, mcpath, repls):
    mcfile = open(mcpath, 'w')

    for line in open(es6path).read().splitlines():
        
        for replacement in repls:
            match = replacement.match(line)
            if match:
                line = replacement.replace(match, line)

        mcfile.write('%s\n' % (line));

    mcfile.close();

def inPlaceReplacement(match, line):
    return '%s' % (line.replace('/*mc:', '').replace('*/', ''))

def wholeLineReplacement(match, line):
    return '%s' % (match.group(1))

def thisReplacement(match, line):
    return '%s' % (line.replace('this.', 'self.'))

class Replacement:

    def replace(self, match, line):
        pass

class RegexReplacement(Replacement):

    def __init__(self, regexp, replacementFunction):
        self.pattern = re.compile(regexp)
        self.replacementFunction = replacementFunction

    def match(self, line):
        return self.pattern.match(line)

    def replace(self, match, line):
        return self.replacementFunction(match, line)

if __name__ == '__main__':
    main()