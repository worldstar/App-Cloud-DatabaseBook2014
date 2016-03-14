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
        
        Bundle bundle1 = getIntent().getExtras();
        String msg1 = bundle1.getString("message1");
        int num1 = bundle1.getInt("number");
        String results = "The message is <"+ msg1 + "> and the number is "+num1;        
        textView1.setText(results);
        
        button1.setOnClickListener( new Button.OnClickListener(){
        	public void onClick(View v){      	
				finish();
        	}
        });          
    }
}
