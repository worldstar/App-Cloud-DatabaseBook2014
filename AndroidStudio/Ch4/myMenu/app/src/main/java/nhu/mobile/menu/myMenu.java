package nhu.mobile.menu;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.widget.Toast;

public class myMenu extends Activity {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
    }
    
	//@Override
	public boolean onCreateOptionsMenu(Menu menu){		
	    MenuInflater inflater = getMenuInflater();
	    inflater.inflate(R.menu.optionmenu, menu);		
		return true;        
	}
	
	//@Override
	public boolean onOptionsItemSelected(MenuItem item){		
		switch(item.getItemId()){
			case R.id.menu01:
				Toast.makeText(myMenu.this, "You select the first item in the menu.", Toast.LENGTH_SHORT).show();
				break;
			case R.id.menu02:
				Toast.makeText(myMenu.this, "You select the second item in the menu.", Toast.LENGTH_SHORT).show();
				break;				
			case R.id.quit:
				Toast.makeText(myMenu.this, "程式即將結束", Toast.LENGTH_SHORT).show();
				finish();
				break;								
		}
		return true;
	}
}