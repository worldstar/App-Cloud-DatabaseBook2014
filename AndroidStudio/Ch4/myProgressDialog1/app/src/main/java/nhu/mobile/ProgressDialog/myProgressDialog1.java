package nhu.mobile.ProgressDialog;

import android.app.Activity;
import android.app.ProgressDialog;
import android.os.Bundle;

public class myProgressDialog1 extends Activity {	
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        
        ProgressDialog dialog = ProgressDialog.show(myProgressDialog1.this, "Title", 
                "Calculating. Please wait...", true);
        for(int i = 0 ; i <=100 ; i ++){
        	Math.sqrt(Math.random());
        }        
        dialog.dismiss();   
    }    
}