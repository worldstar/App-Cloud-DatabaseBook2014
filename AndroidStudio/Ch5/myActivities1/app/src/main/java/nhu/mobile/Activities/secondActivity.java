package nhu.mobile.Activities;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class secondActivity extends Activity {
	Button button1;
	TextView textView1;
	
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity2layout);
        
        textView1 = (TextView) findViewById(R.id.TextView01);    
        button1 = (Button) findViewById(R.id.Button01);  
        textView1.setText("In secondActivity.");
        
        button1.setOnClickListener( new Button.OnClickListener(){
        	public void onClick(View v){      	
				finish();
        	}
        });          
    }
}
