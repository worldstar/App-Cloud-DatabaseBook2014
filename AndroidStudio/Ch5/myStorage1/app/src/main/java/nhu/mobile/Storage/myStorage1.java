package nhu.mobile.Storage;

import android.app.Activity;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.Environment;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class myStorage1 extends Activity {
	EditText editText1;
	Button button1;
	
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        
        editText1 = (EditText) findViewById(R.id.EditText01);
        button1 = (Button) findViewById(R.id.Button01);
        
        button1.setOnClickListener( new Button.OnClickListener(){
        	public void onClick(View v){
        		String result = editText1.getEditableText().toString();
        		savePreference("editText1", result);
            	Toast.makeText(myStorage1.this, "統編資料"+result+"已儲存", Toast.LENGTH_SHORT).show();        		
        	}
        });         
        
        //Restore the previous data onto the Edittext       
        editText1.setText(getPreference("editText1"));                         
    }    
    
	public void savePreference(String id, String result){
		String PREFS_NAME = "nhu.mobile.Storage"; 
		SharedPreferences settings = getSharedPreferences(PREFS_NAME, 0); 
		SharedPreferences.Editor editor = settings.edit(); 
		editor.putString(id, result);
		editor.commit();
	} 
	
	public String getPreference(String id){
		String PREFS_NAME = "nhu.mobile.Storage"; 
		SharedPreferences settings = getSharedPreferences(PREFS_NAME, 0);	
		return settings.getString(id, "");
	}    
}