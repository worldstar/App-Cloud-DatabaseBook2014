package nhu.mobile.storage;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class mySQLiteOpenHelper extends SQLiteOpenHelper {
	private Context context;
    private static final int DATABASE_VERSION = 1;    	
    private String myDB_Path = "/data/data/nhu.mobile.storage/";
	private static final String myDB_NAME = "sqlite_testbyfirefox.sqlite";
	String wholePath = myDB_Path + myDB_NAME;
	private static final String TABLE_NAME = "tb1";	
	
	public mySQLiteOpenHelper(Context context) {
        super(context, myDB_NAME, null, DATABASE_VERSION);
        this.context = context;
	}

	@Override
	public void onCreate(SQLiteDatabase db) {
		// TODO Auto-generated method stub
	}

	@Override
	public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
		// TODO Auto-generated method stub
	}
	
	public boolean checkDatabase() throws IOException{
		boolean exist = false;		
		SQLiteDatabase database = getDatabase();		
		
		if(database != null){
			database.close();
			exist = true;
		}
		else{
			copyDatabase();			
		}
		
		
		return exist;
	}
	
	public SQLiteDatabase getDatabase() throws IOException{
		SQLiteDatabase database = null;
		
		try{
			database = SQLiteDatabase.openDatabase(wholePath, null, SQLiteDatabase.OPEN_READWRITE);
		}
		catch(Exception e){
			e.printStackTrace();
		}			
		return database;
	}
	
	public int copyDatabase() throws IOException{		
		InputStream is = context.getAssets().open(myDB_NAME);						
		OutputStream os = new FileOutputStream(wholePath);		
		
		byte[] buffer = new byte[8192];
		int count = 0;
		
		while ((count = is.read(buffer)) > 0) {
			os.write(buffer, 0, count);
		}	
		
		os.flush();
		os.close();
		is.close();		
		return count;
	}
	
	public String getResults(SQLiteDatabase database, String sql, String[] selectionArgs) {
		String result = "";
		try {
			Cursor c = database.rawQuery(sql, selectionArgs);
			int numRows = c.getCount();
			c.moveToFirst();
	
			for (int i = 0; i < numRows; ++i) {
				result += c.getLong(0) +" ";
				result += c.getString(1) +" ";
				result += c.getString(2) +" ";
				result += c.getString(3) +" ";
				result += "\n";
				c.moveToNext();				
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
	public String getResults2(SQLiteDatabase database) {
		String result = "";
		try {
			Cursor c = database.query(TABLE_NAME, new String[] { "id", "name", "email", "createDate" }, null,					
			null, null, null, null);			
	
			int numRows = c.getCount();
			c.moveToFirst();
	
			for (int i = 0; i < numRows; ++i) {
				result += c.getLong(0) +" ";
				result += c.getString(1) +" ";
				result += c.getString(2) +" ";
				result += c.getString(3) +" ";
				result += "\n";
				c.moveToNext();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}	
}
