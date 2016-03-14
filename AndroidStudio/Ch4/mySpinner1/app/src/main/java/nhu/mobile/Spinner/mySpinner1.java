package nhu.mobile.Spinner;



import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;
import android.widget.AdapterView.OnItemSelectedListener;

public class mySpinner1 extends Activity {	
		
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
                       
        TextView textView1 = (TextView) findViewById(R.id.TextView01);
        Spinner spinner1 = (Spinner) findViewById(R.id.Spinner01);
        textView1.setText("設定購買機票張數");                   
        String numbers[] = new String[]{"1", "2", "3", "4", "5", "6", "7", "8", "9", "10"}; 
        
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this,android.R.layout.simple_spinner_item, numbers);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinner1.setAdapter(adapter);
        spinner1.setOnItemSelectedListener((OnItemSelectedListener) new MySelectedItemListener());              
    }
    
    public class MySelectedItemListener implements OnItemSelectedListener {
        public void onItemSelected(AdapterView<?> parent,
            View view, int pos, long id) {        	
        	Toast.makeText(parent.getContext(), "購買" +
              parent.getItemAtPosition(pos).toString()+"張機票", Toast.LENGTH_LONG).show();
        }

        public void onNothingSelected(AdapterView parent) {
          // Do nothing.
        }
    }  
}