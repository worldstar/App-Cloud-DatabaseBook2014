package peterbookmace.taiwanculture.sample;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.StatusLine;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.json.JSONArray;
import org.json.JSONObject;

public class getDataFromInternet {
	
	//Base method
	public String readJSONData(String queryString) {
		StringBuilder builder = new StringBuilder();
		HttpClient client = new DefaultHttpClient();
		HttpGet httpGet = new HttpGet(queryString);
		
		try {
			HttpResponse response = client.execute(httpGet);
			StatusLine statusLine = response.getStatusLine();
			int statusCode = statusLine.getStatusCode();
			if (statusCode == 200) {
				HttpEntity entity = response.getEntity();
				InputStream content = entity.getContent();
				BufferedReader reader = new BufferedReader(
						new InputStreamReader(content));
				String line;
				while ((line = reader.readLine()) != null) {
					builder.append(line);
				}
			} else {
				//Log.e(locationDetection.class.toString(), "Failed to download file");
			}
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return builder.toString();
	}	
	
	//Events under the category.
	public String getEvents(String categoryID){
	    String address = "http://www.api.cloud.taipei.gov.tw/CSCP_API/pnc/cei/categories/"+categoryID+"/topics";
	    return readJSONData(address);
	}	
	
	//Event detail content.
	public String getEventDetails(String eventID){
		String address = "http://www.api.cloud.taipei.gov.tw/CSCP_API/pnc/cei/rows/"+eventID;	   
	    return readJSONData(address);
	}	
	
	//Parse events under the category.
	public ArrayList<String[]> parseCategory(String readResults){
		ArrayList<String[]> list1 = new ArrayList<String[]>();
	    String resultArrays[][] = new String[1][3];
	    
	    try {
	          JSONArray jsonWholeArray = new JSONArray(readResults);
	          resultArrays = new String[jsonWholeArray.length()][3];

	          for(int i = 0 ; i < jsonWholeArray.length() ; i ++){
	                 JSONObject obj1 = jsonWholeArray.getJSONObject(i);
	                 resultArrays[i][0] = obj1.getString("topicId");
	                 resultArrays[i][1] = obj1.getString("activityStartDate");
	                 resultArrays[i][2] = obj1.getString("activityName");
	                 list1.add(resultArrays[i]);	                 
	          }	          
		} catch (Exception e) {
			e.printStackTrace();
				//result2 += e.toString();
		}
	    return list1;
	}		
	
	//Parse event detail content.
	public String[] parseEventDetails(String readResults){
	    String resultArrays[] = new String[4];
	    try {
	           JSONArray jsonWholeArray = new JSONArray(readResults);
	           JSONObject obj1 = jsonWholeArray.getJSONObject(0);
	           resultArrays[0] = obj1.getString("webPageContent");
	           resultArrays[1] = obj1.getString("locationAddr");
	           resultArrays[2] = obj1.getString("activityStartDate");
	           resultArrays[3] = obj1.getString("activityEndDate");	           
		} catch (Exception e) {
	          e.printStackTrace();
		}
	    return resultArrays;
	}	
	
    int getCategoryID(int iconID){        
        if(iconID == 0){//展覽廣場
        	return 6;
        }
        else if(iconID == 1){//表演萬象
        	return 5;
        }
        else if(iconID == 2){//音樂現場
        	return 7;
        }        
        else if(iconID == 3){//講座研習
        	return 8;
        }       	
        else if(iconID == 4){//電影瞭望
        	return 2;
        }
        else if(iconID == 5){//城市萬花筒
        	return 3;
        }        
        else if(iconID == 6){//親子活動
        	return 11;
        }       
        else if(iconID == 7){//城外行腳
        	return 12;
        }    
    	return 2;
    }   	
}
