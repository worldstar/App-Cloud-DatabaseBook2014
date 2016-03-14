package nhu.mobile.Storage;

import java.io.FileInputStream;
import java.io.FileOutputStream;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class myStorage2 extends Activity {
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
        		saveToFile("editText1", result);
            	Toast.makeText(myStorage2.this, "統編資料"+result+"已儲存", Toast.LENGTH_SHORT).show();        		
        	}
        });         
      
        //Restore the previous data onto the Edittext        
        editText1.setText(getDataFromFile("editText1"));                
    }
    
	public void saveToFile(String fileName, String result){
		try{
			FileOutputStream fos = openFileOutput(fileName, MODE_PRIVATE);
			fos.write(result.getBytes());
			fos.close();		
		}
		catch (Exception e){			
			
		}		
	}            	
	
	public String getDataFromFile(String fileName){		
		byte[] result = null;   
		try{
			FileInputStream fis = openFileInput(fileName);
			result = new byte[fis.available()]; 
			fis.read(result);
			fis.close();			
		}
		catch (Exception e){
			
		}	
		
		if(result == null){
			return "";
		}
		
		return new String(result);
	}    
}