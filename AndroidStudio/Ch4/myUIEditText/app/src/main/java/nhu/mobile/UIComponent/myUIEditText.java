package nhu.mobile.UIComponent;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;


public class myUIEditText extends Activity {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        
        Button button1 = (Button) findViewById(R.id.Button01);
        
        button1.setOnClickListener( new Button.OnClickListener(){
        	public void onClick(View v){
            	Toast.makeText(myUIEditText.this, "你點選了Button01", Toast.LENGTH_LONG).show();            	
        	}
        });   
        
        final EditText editText1 = (EditText) findViewById(R.id.EditText01);
        Button button2 = (Button) findViewById(R.id.Button02);
        button2.setText("Button02");
        
        button2.setOnClickListener( new Button.OnClickListener(){
        	public void onClick(View v){
        		Toast.makeText(myUIEditText.this, editText1.getText(), Toast.LENGTH_LONG).show();        
        	}
        });                               
    }        
}