package nhu.mobile.ProgressDialog;

import android.app.Activity;
import android.app.ProgressDialog;
import android.os.Bundle;

public class myProgressDialog2 extends Activity {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        
        ProgressDialog dialog = new ProgressDialog(myProgressDialog2.this);
        dialog.setProgressStyle(ProgressDialog.STYLE_HORIZONTAL);
        dialog.setMessage("Loading...");
        dialog.setCancelable(false);
        dialog.show();
        
        for(int i = 0 ; i <=100 ; i ++){
        	dialog.setProgress(i);
        	//dialog.incrementProgressBy(1);
        }
        
        dialog.dismiss();
    }
}