package nhu.mobile.ImageView;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;

import android.app.Activity;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.widget.ImageView;

public class myImageView2 extends Activity {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        
        ImageView image = (ImageView) findViewById(R.id.image);                 
        getInternetImage getInternetImage1 = new getInternetImage();
        Bitmap bm = getInternetImage1.getImage("http://code.google.com/images/code_logo.png");
        image.setImageBitmap(bm);
    }      
}