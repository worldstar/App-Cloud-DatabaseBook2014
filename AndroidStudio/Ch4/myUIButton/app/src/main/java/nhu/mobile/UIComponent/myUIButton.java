package nhu.mobile.UIComponent;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class myUIButton extends Activity {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        
        Button button1 = (Button) findViewById(R.id.Button01);
        
        button1.setOnClickListener( new Button.OnClickListener(){
        	public void onClick(View v){
            	Toast.makeText(myUIButton.this, "你點選了Button01", Toast.LENGTH_LONG).show();            	
        	}
        });                    
    }        
}