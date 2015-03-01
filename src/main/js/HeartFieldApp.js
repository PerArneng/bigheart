//mc:using Toybox.Application; 

class BigHeartFieldApp /*mc:extends Application.AppBase*/ {

    //! onStart() is called on application start uddp
    /*mc:function*/ onStart() {
    }

    //! onStop() is called when your application is exiting
    /*mc:function*/ onStop() {
    }

    //! Return the initial view of your application here
    /*mc:function*/ getInitialView() {
        return [ new BigHeartField() ];
    }

}