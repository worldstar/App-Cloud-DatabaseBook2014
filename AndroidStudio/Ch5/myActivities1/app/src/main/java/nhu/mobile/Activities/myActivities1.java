package nhu.mobile.Activities;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class myActivities1 extends Activity {
	Button button1;
	
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        
        button1 = (Button) findViewById(R.id.Button01);         
        
        button1.setOnClickListener( new Button.OnClickListener(){
        	public void onClick(View v){
				Intent intent = new Intent();
				intent.setClass(myActivities1.this, secondActivity.class);
				startActivity(intent);   				
        	}
        });          
    }
}