package nhu.mobile.Tab;


import android.app.Activity;
import android.app.TabActivity;
import android.content.Context;
import android.content.Intent;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.widget.TabHost;
import android.widget.TabHost.TabSpec;

public class mySimpleTab2 extends TabActivity {
	TabHost mTabHost;
	
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        
        Context ctx = this.getApplicationContext();
        Drawable drawableMap = this.getResources().getDrawable(R.drawable.map);
           
		//tab 1
		mTabHost = getTabHost();
		TabSpec tabSpec1 = mTabHost.newTabSpec("tab_test1");
		tabSpec1.setIndicator("地圖", drawableMap);
		Intent i1 = new Intent(ctx, firstClass.class);
		tabSpec1.setContent(i1);
		mTabHost.addTab(tabSpec1);
		
        Drawable drawablePicture = this.getResources().getDrawable(R.drawable.picture);
        Drawable drawableAbout = this.getResources().getDrawable(R.drawable.information);  		
		
		//tab2
		TabSpec tabSpec2 = mTabHost.newTabSpec("tab_test2");
		tabSpec2.setIndicator("照片", drawablePicture);
		Intent i2 = new Intent(ctx, secondClass.class);
		tabSpec2.setContent(i2);
		mTabHost.addTab(tabSpec2);
					
		//tab 3
		TabSpec tabSpec3 = mTabHost.newTabSpec("tab_test3");
		tabSpec3.setIndicator("資訊", drawableAbout);
		Intent i3 = new Intent(ctx, thirdClass.class);
		tabSpec3.setContent(i3);
		mTabHost.addTab(tabSpec3);						        
    }
}