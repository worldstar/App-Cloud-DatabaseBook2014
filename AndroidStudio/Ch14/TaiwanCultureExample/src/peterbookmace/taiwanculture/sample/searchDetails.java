package peterbookmace.taiwanculture.sample;

import java.util.ArrayList;
import java.util.HashMap;
import android.app.Activity;
import android.app.ProgressDialog;
import android.os.AsyncTask;
import android.os.Bundle;
import android.widget.ListView;
import android.widget.SimpleAdapter;
import android.widget.TextView;


public class searchDetails extends Activity {       
    String topicId = "";
    String activityName = "";
     
    TextView textView1;
    ListView listView;         
    
    /** Called when the activity is first created. */    
	@Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.searchdetail); 
        
		Bundle bundle1 = this.getIntent().getExtras();
		topicId = bundle1.getString("topicId");	
		activityName = bundle1.getString("activityName");		
		
        textView1 = (TextView) findViewById(R.id.textView1);  
        textView1.setText(activityName);
        textView1.setTextSize(24); 
        
        if(activityName.length() > 13 && activityName.length() <= 20){
        	textView1.setTextSize(20);
        }
        else if(activityName.length() > 20 && activityName.length() <= 30){
        	textView1.setTextSize(18);
        }
        else if(activityName.length() > 30 && activityName.length() <= 40){
        	textView1.setTextSize(16);
        }       
        else if(activityName.length() > 40){
        	textView1.setTextSize(14);
        }                   		        

        new MyTaskDownloadDetails().execute();
    }        
    
    private class MyTaskDownloadDetails extends AsyncTask<Void, Void, Void>{    
    	getDataFromInternet getDataFromInternet1 = new getDataFromInternet();
    	String eventDetail = "";
    	String[] list1 = null;
    	private ProgressDialog myDialog;
    	
        @Override    
        protected void onPreExecute(){       
            super.onPreExecute();
       		myDialog = new ProgressDialog(searchDetails.this);
    		myDialog.setTitle(getString(R.string.downloading));
    		myDialog.setMessage(getString(R.string.pleaseWait));  
            myDialog.setCancelable(false);
            myDialog.setIndeterminate(true);
            myDialog.show();
        }    	
    	
        @Override
        protected Void doInBackground(Void... params) {	        
        	eventDetail = getDataFromInternet1.getEventDetails(topicId);
        	list1 = getDataFromInternet1.parseEventDetails(eventDetail);   
	        
			return null;         
        }
        
        @Override
        protected void onPostExecute(Void result) {  
        	ArrayList<HashMap<String, Object>> listItem = processResult(list1);
        	SimpleAdapter listItemAdapter = new SimpleAdapter(searchDetails.this, listItem, R.layout.itemsimple,      
                    new String[] {"ItemImage", "ItemTitle", "ItemAddress"},  
                    new int[] {R.id.itemImage, R.id.itemTitle, R.id.itemText}  
            );        
        	listView=(ListView)searchDetails.this.findViewById(R.id.listView1);  
            listView.setAdapter(listItemAdapter);         	

            myDialog.dismiss();
        	super.onPostExecute(result);   
        }
    }              
    
	private ArrayList<HashMap<String, Object>> processResult(String list1[]){
	    ArrayList<HashMap<String, Object>> listItem = new ArrayList<HashMap<String, Object>>();  
	    
	    for(int i = 0 ; i < list1.length ; i ++){
            HashMap<String, Object> map = new HashMap<String, Object>(); 
            map.put("ItemTitle", list1[i]); 
            map.put("ItemImage", R.drawable.arrow);       
            
            listItem.add(map);           
	    }     
	    return listItem;		
	}    
       
}