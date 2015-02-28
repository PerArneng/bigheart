using Toybox.Application as App;

class BigHeartFieldApp extends App.AppBase {

    //! onStart() is called on application start uddp
    function onStart() {
    }

    //! onStop() is called when your application is exiting
    function onStop() {
    }

    //! Return the initial view of your application here
    function getInitialView() {
        return [ new BigHeartField() ];
    }

}