package nhu.mobile.storage;

import java.io.IOException;

import android.app.Activity;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.widget.TextView;

public class SQLiteTest2012Act extends Activity {
	
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        TextView textView1 = (TextView) findViewById(R.id.TextView01);
        mySQLiteOpenHelper mySQLiteOpenHelper1 = new mySQLiteOpenHelper(this);  
        SQLiteDatabase database = null;
                                            
        try {
        	mySQLiteOpenHelper1.checkDatabase(); 
        	database = mySQLiteOpenHelper1.getDatabase();
		} catch (IOException e) {
			e.printStackTrace();
		} 						
		
		//為了測試以下SQL與法，請將這些程式從多行註解中移出即可測試		
		/*
		String insertSQL = "insert into tb1(name, email) values('hello', 'b@gmail.com')";
		database.execSQL(insertSQL);
		
		String insertSQL2 = "insert into tb1(name, email) values(?, ?)";
		String[] bindArgs = new String[]{"hello2", "c@gmail.com"};
		database.execSQL(insertSQL2, bindArgs);				
		
		String updateSQL = "update tb1 set name = 'a1' where id = 2";
		database.execSQL(updateSQL);
		
		String updateSQL2 = "update tb1 set name = ? where id = ?";
		String[] bindArgs2 = new String[]{"jack1", "2"};	
		database.execSQL(updateSQL2, bindArgs2);		
		
		String deleteSQL = "delete from tb1 where id = 3";
		database.execSQL(deleteSQL);	
		
		String deleteSQL2 = "delete from tb1 where id = ?";
		String[] bindArgs3 = new String[]{"4"};	
		database.execSQL(deleteSQL2, bindArgs3);
		*/				
										
		String sql = "select * from tb1;";
		String[] selectionArgs = null;
				
		//條件的查詢
		//sql = "select * from tb1 where id=?;";	
		//selectionArgs = new String[]{"1"};		
		
		String result = mySQLiteOpenHelper1.getResults(database, sql, selectionArgs);		

		textView1.setText(result);
		database.close();
    }
      
}