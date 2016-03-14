package peterbookmace.taiwanculture.sample;

import java.util.ArrayList;
import java.util.HashMap;
import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.SimpleAdapter;
import android.widget.TextView;



public class aboutUS extends Activity {            
    TextView textView1;
    ImageView imgEvent;
    View defaultSelectedView;
    LinearLayout myGallery;
    ListView listView;  
    //private SQLiteDatabase db;
    
    int langID = 2;
    
    /** Called when the activity is first created. */    
	@Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.aboutus);         		
		
        textView1 = (TextView) findViewById(R.id.textView1);  
        textView1.setText(getString(R.string.about));
        textView1.setTextSize(24);   
        
		ImageView imgHead = (ImageView)findViewById(R.id.imageView1);
		imgHead.setOnClickListener(new ImageButton.OnClickListener(){  
            @Override  
            public void onClick(View v) {  
            	finish();                
            }             
        });  		
		
		String list1[] = new String[]{getString(R.string.aboutContent), "?��????�師","幕�?總召：�?�?��","美工設�?：鄭?��?","系統規�?：�?于�?","網�?設�?：陳如�?","影�?製�?：�?翔�?"};
		final String email[] = new String[]{"", "worldstar.chen@gmail.com", "jp21joyce@gmail.com", "kaiyuan_cheng@hotmail.com", "yslin@itri.org.tw", "jp21athena@gmail.com", "jp21hart@gmail.com"};
    	ArrayList<HashMap<String, Object>> listItem = processResult(list1, email);
    	SimpleAdapter listItemAdapter = new SimpleAdapter(this, listItem, R.layout.itemsimple,      
                new String[] {"ItemImage", "ItemTitle", "ItemAddress"},  
                new int[] {R.id.itemImage, R.id.itemTitle, R.id.itemText}  
        );
    	
    	listView = (ListView)findViewById(R.id.listView1);  
        listView.setAdapter(listItemAdapter);     
        listView.setOnItemClickListener(new OnItemClickListener() {
        	public void onItemClick(AdapterView<?> a, View v, int position, long id) {
        		if(position > 0){
            		Uri uri = Uri.parse("mailto:"+email[position]);  
            		Intent i1 = new Intent(Intent.ACTION_SENDTO, uri);  
            		//標�?
            		i1.putExtra(Intent.EXTRA_SUBJECT, getString(R.string.app_name)+" feedback");          		          		
            		startActivity(i1); 
        		}                    		
        	}
        });        	
    }        
    
    
	private ArrayList<HashMap<String, Object>> processResult(String list1[], String email[]){
	    ArrayList<HashMap<String, Object>> listItem = new ArrayList<HashMap<String, Object>>();  
	    
	    for(int i = 0 ; i < list1.length ; i ++){
            HashMap<String, Object> map = new HashMap<String, Object>(); 
            map.put("ItemTitle", list1[i]);
            map.put("ItemAddress", email[i]); 
            
            if(i > 0){
            	map.put("ItemImage", R.drawable.arrow); 
            }
            
            listItem.add(map);           
	    }     
	    return listItem;		
	}    
    
}