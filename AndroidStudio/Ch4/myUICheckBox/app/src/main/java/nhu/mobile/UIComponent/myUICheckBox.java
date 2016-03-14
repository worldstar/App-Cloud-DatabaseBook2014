package nhu.mobile.UIComponent;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.Dialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class myUICheckBox extends Activity {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        
        Button button1 = (Button) findViewById(R.id.Button01);
        
        button1.setOnClickListener( new Button.OnClickListener(){
        	public void onClick(View v){
            	Toast.makeText(myUICheckBox.this, "你點選了Button01", Toast.LENGTH_LONG).show();            	
        	}
        });
        
        final EditText editText1 = (EditText) findViewById(R.id.EditText01);
        Button button2 = (Button) findViewById(R.id.Button02);
        button2.setText("Button02");
        
        button2.setOnClickListener( new Button.OnClickListener(){
        	public void onClick(View v){
        		Toast.makeText(myUICheckBox.this, editText1.getText(), Toast.LENGTH_LONG).show();        
        	}
        });        
        
        final CheckBox checkBox1 = (CheckBox) findViewById(R.id.CheckBox01);
        checkBox1.setText("是否參加此活動");
        
        checkBox1.setOnClickListener(new CheckBox.OnClickListener() {
            public void onClick(View v) {
                // Perform action on clicks, depending on whether it's now checked
                if (((CheckBox) v).isChecked()) {
                    Toast.makeText(myUICheckBox.this, "參加", Toast.LENGTH_LONG).show();
                } else {
                    Toast.makeText(myUICheckBox.this, "不參加", Toast.LENGTH_LONG).show();
                }
            }
        });                           
    }        
}