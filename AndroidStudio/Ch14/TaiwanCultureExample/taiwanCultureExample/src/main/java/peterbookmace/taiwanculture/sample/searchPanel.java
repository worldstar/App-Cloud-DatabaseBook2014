package peterbookmace.taiwanculture.sample;

import java.util.ArrayList;
import java.util.HashMap;

import android.app.Activity;
import android.app.ProgressDialog;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.ListView;
import android.widget.SimpleAdapter;


public class searchPanel extends Activity{       
    int iconNumber = 0;
    int categoryID = 2;
	String numbers[];    
    ListView listView;
    
    int iconID[] = new int[]{R.drawable.menu_1, R.drawable.menu_2, R.drawable.menu_3,
    		R.drawable.menu_4, R.drawable.menu_5, R.drawable.menu_6, R.drawable.menu_7, 
    		R.drawable.menu_8};        
    
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.searchpanel2);    

        numbers = new String[]{getString(R.string.ExhibitionSquare), getString(R.string.PerformingArts), 
        		getString(R.string.LiveMusic), getString(R.string.Lecture), getString(R.string.FilmScope), 
        		getString(R.string.CityKaleidoscope), getString(R.string.FamilyOutings), getString(R.string.BeyondTaipei)};        
        
		Bundle bundle1 = this.getIntent().getExtras();
		iconNumber = bundle1.getInt("iconNumber");			
        new MyTaskDownloadEvents().execute();
    }
    
    private class MyTaskDownloadEvents extends AsyncTask<Void, Void, Void>{    
    	getDataFromInternet getDataFromInternet1 = new getDataFromInternet();
    	ArrayList<String[]> list1 = null;
    	private ProgressDialog myDialog;
    	String eventsData = "";
    	
        @Override    
        protected void onPreExecute(){       
            super.onPreExecute();
       		myDialog = new ProgressDialog(searchPanel.this);
    		myDialog.setTitle(getString(R.string.downloading));
    		myDialog.setMessage(getString(R.string.pleaseWait));  
            myDialog.setCancelable(false);
            myDialog.setIndeterminate(true);
            myDialog.show();
        }    	
    	
        @Override
        protected Void doInBackground(Void... params) {	        
        	categoryID = getDataFromInternet1.getCategoryID(iconNumber);
        	eventsData = getDataFromInternet1.getEvents(categoryID+"");
        	list1 = getDataFromInternet1.parseCategory(eventsData);
			return null;         
        }
        
        @Override
        protected void onPostExecute(Void result) {  
        	fillListView(list1);
            myDialog.dismiss();
        	super.onPostExecute(result);   
        }
    }        
    
    public void fillListView(final ArrayList<String[]> list1){
    	ArrayList<HashMap<String, Object>> listItem = processResult(list1);
    	SimpleAdapter listItemAdapter = new SimpleAdapter(this, listItem, R.layout.item,      
                new String[] {"ItemImage", "ItemTitle", "startDate"},  
                new int[] {R.id.itemImage, R.id.itemTitle, R.id.startDate}  
        );    	
		
    	listView=(ListView)this.findViewById(R.id.listView1);  
        listView.setAdapter(listItemAdapter);     
        listView.setOnItemClickListener(new OnItemClickListener() {
        	public void onItemClick(AdapterView<?> a, View v, int position, long id) {
    	  		Intent intent = new Intent();
    			intent.setClass(searchPanel.this, searchDetails.class);
    			Bundle bundle1 = new Bundle();    			
    			bundle1.putString("topicId", list1.get(position)[0]);    
    			bundle1.putString("activityName", list1.get(position)[2]);  
    			intent.putExtras(bundle1);
    			startActivity(intent);
    			//Toast.makeText(searchPanel.this, list1.get(position)[0]+"\n"+list1.get(position)[2], Toast.LENGTH_SHORT).show();
        	}
        });          
    }    
    
	private ArrayList<HashMap<String, Object>> processResult(ArrayList<String[]> list1){
	    ArrayList<HashMap<String, Object>> listItem = new ArrayList<HashMap<String, Object>>();  
	    
	    for(int i = 0 ; i < list1.size() ; i ++){
	    	String[] tempRawData = list1.get(i);  
            HashMap<String, Object> map = new HashMap<String, Object>();             
            map.put("ItemImage", iconID[iconNumber]);
            map.put("ItemTitle", tempRawData[2]);  
            map.put("startDate", getString(R.string.activityStartDate)+(": ")+tempRawData[1]);                 
            listItem.add(map);           
	    }     
	    return listItem;		
	}
        
    public void onDestroy(){
        super.onDestroy();
    }       
}
