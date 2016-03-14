package peterbookmace.taiwanculture.sample;

import java.util.ArrayList;
import java.util.HashMap;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.GridView;
import android.widget.SimpleAdapter;

public class Main extends Activity {
	
    /** Called when the activity is first created. */
	@Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.navgrid);    
        
        String iconNames[] = new String[]{getString(R.string.ExhibitionSquare), getString(R.string.PerformingArts), 
        		getString(R.string.LiveMusic), getString(R.string.Lecture), getString(R.string.FilmScope), 
        		getString(R.string.CityKaleidoscope), getString(R.string.FamilyOutings), getString(R.string.BeyondTaipei)};
        int iconID[] = new int[]{R.drawable.menu_1, R.drawable.menu_2, R.drawable.menu_3,
        		R.drawable.menu_4, R.drawable.menu_5, R.drawable.menu_6, R.drawable.menu_7, 
        		R.drawable.menu_8};
        
        GridView gridview = (GridView) findViewById(R.id.gridView1);  
        
        //Auto generate the data and map into the Grid.
        ArrayList<HashMap<String, Object>> lstImageItem = new ArrayList<HashMap<String, Object>>();  
        for(int i = 0; i < iconNames.length; i++){  
          HashMap<String, Object> map = new HashMap<String, Object>();  
          map.put("ItemImage", iconID[i]); 
          map.put("ItemText", iconNames[i]);
          lstImageItem.add(map); 
        }  
        //Map the items with the UI objects
        SimpleAdapter saImageItems = new SimpleAdapter(this, 
                                                  lstImageItem,//Data source
                                                  R.layout.navitem,//XML layout                                                    
                                                  new String[] {"ItemImage"},//Map the data with the ItemImage & ItemText     
                                                  new int[] {R.id.ItemImage});//The image view inside the XML            
        
        gridview.setAdapter(saImageItems);  
        gridview.setOnItemClickListener(new ItemClickListener());           
    }     
	

    class  ItemClickListener implements OnItemClickListener{  
	  public void onItemClick(AdapterView<?> arg0,//The AdapterView where the click happened   
	                                    View arg1,//The view within the AdapterView that was clicked  
	                                    int arg2,//The position of the view in the adapter  
	                                    long arg3//The row id of the item that was clicked  
	                                    ) {  
	      //Position arg2 is equal to arg3  
	      HashMap<String, Object> item=(HashMap<String, Object>) arg0.getItemAtPosition(arg2);  
	      //To show the ItemText
	      setTitle((String)item.get("ItemText")); 
	      
	  	  Intent intent = new Intent();
		  intent.setClass(Main.this, searchPanel.class);
		  Bundle bundle1 = new Bundle();
		  bundle1.putInt("iconNumber", arg2);			
		  intent.putExtras(bundle1);
		  startActivity(intent); 	 
	  } 
    }    
    
    public void onDestroy(){
        super.onDestroy();
    }    
}