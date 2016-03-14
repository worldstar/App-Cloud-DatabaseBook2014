package nhu.mobile.UIComponent;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.Toast;

public class myUIAlertDialog extends Activity {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        
        Button button1 = (Button) findViewById(R.id.Button01);
        
        button1.setOnClickListener( new Button.OnClickListener(){
        	public void onClick(View v){
            	Toast.makeText(myUIAlertDialog.this, "你點選了Button01", Toast.LENGTH_LONG).show();            	
        	}
        });   
        
        final EditText editText1 = (EditText) findViewById(R.id.EditText01);
        Button button2 = (Button) findViewById(R.id.Button02);
        button2.setText("Button02");
        
        button2.setOnClickListener( new Button.OnClickListener(){
        	public void onClick(View v){
        		Toast.makeText(myUIAlertDialog.this, editText1.getText(), Toast.LENGTH_LONG).show();        
        	}
        });        
        
        final CheckBox checkBox1 = (CheckBox) findViewById(R.id.CheckBox01);
        checkBox1.setText("是否參加此活動");
        
        checkBox1.setOnClickListener(new CheckBox.OnClickListener() {
            public void onClick(View v) {
                // Perform action on clicks, depending on whether it's now checked
                if (((CheckBox) v).isChecked()) {
                    Toast.makeText(myUIAlertDialog.this, "參加", Toast.LENGTH_LONG).show();
                } else {
                    Toast.makeText(myUIAlertDialog.this, "不參加", Toast.LENGTH_LONG).show();
                }
            }
        });       
        
        Button button3 = (Button) findViewById(R.id.Button03);
        button3.setText("Simple Dialog");
        
        button3.setOnClickListener( new Button.OnClickListener(){
        	public void onClick(View v){
        		  AlertDialog.Builder dialog = new AlertDialog.Builder(myUIAlertDialog.this);		  	  
        		  dialog.setPositiveButton("確認",
        				    new DialogInterface.OnClickListener(){
        		        	public void onClick(
        		            DialogInterface dialoginterface, int i){
        		        		Toast.makeText(myUIAlertDialog.this, "您已確認參加此活動", Toast.LENGTH_LONG).show();
        		            }
        		  });
        		  
        		  dialog.setNegativeButton("取消",
      				    new DialogInterface.OnClickListener(){
      		        	public void onClick(
      		            DialogInterface dialoginterface, int i){
      		        		Toast.makeText(myUIAlertDialog.this, "取消選擇", Toast.LENGTH_LONG).show();
      		            }
        		  });        		  
        		  
        		  dialog.setTitle("是否參加此活動?");
        		  dialog.show();
        	}
        });      
        
        Button button4 = (Button) findViewById(R.id.Button04);
        button4.setText("Multiple Choices");
        
        button4.setOnClickListener( new Button.OnClickListener(){
        	public void onClick(View v){
        		  AlertDialog.Builder dialog = new AlertDialog.Builder(myUIAlertDialog.this);
        		  dialog.setTitle("是否參加此活動?");
        		  final String options[] = new String[]{"確認","不參加 ","稍後決定"};
        		  dialog.setItems(options, new DialogInterface.OnClickListener(){        	          
        	          public void onClick(DialogInterface dialog, int index){        	        	  
        	        	  if(index ==0){//Route to the location
        	        		  Toast.makeText(myUIAlertDialog.this, "您已確認參加此活動", Toast.LENGTH_LONG).show();
        	        	  }
        	        	  else if(index ==1){//make a call
        	        		  Toast.makeText(myUIAlertDialog.this, "很可惜沒有您的參與", Toast.LENGTH_LONG).show();
        	        	  }
        	        	  else{
        	        		  Toast.makeText(myUIAlertDialog.this, "之後請記得確認此活動", Toast.LENGTH_LONG).show();
        	        	  }
        	          }
        	       });
        		          		  
        		  dialog.show();
        	}
        });                 
    }        
}