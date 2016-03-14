package nhu.mobile.ImageView;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;

/**
 * This program is modified from the following website:
 * http://android-er.blogspot.com/2010/06/load-imageview-with-bitmap-from.html
 */

public class getInternetImage {	
	public Bitmap getImage(String url){
        BitmapFactory.Options bmOptions;
        bmOptions = new BitmapFactory.Options();
        bmOptions.inSampleSize = 1;        
        return LoadImage(url, bmOptions);
	}

    private Bitmap LoadImage(String URL, BitmapFactory.Options options)
    {       
     Bitmap bitmap = null;
     InputStream in = null;       
        try {
            in = OpenHttpConnection(URL);
            bitmap = BitmapFactory.decodeStream(in, null, options);
            in.close();
        } catch (IOException e1) {
        }
        return bitmap;               
    }
    
    private InputStream OpenHttpConnection(String strURL) throws IOException{
    	 InputStream inputStream = null;
    	 URL url = new URL(strURL);
    	 URLConnection conn = url.openConnection();

    	 try{
    	  HttpURLConnection httpConn = (HttpURLConnection)conn;
    	  httpConn.setRequestMethod("GET");
    	  httpConn.connect();

    	  if (httpConn.getResponseCode() == HttpURLConnection.HTTP_OK) {
    	   inputStream = httpConn.getInputStream();
    	  }
    	 }
    	 catch (Exception ex)
    	 {
    	 }
    	 return inputStream;
    }  	
}
