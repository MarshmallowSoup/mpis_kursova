import psycopg2
from psycopg2 import sql

# Replace these values with your PostgreSQL credentials
db_params = {
    'host': '127.0.0.1',
    'database': 'user',
    'user': 'root',
    'password': 'root',
    'port': 5432
}

def create_table(conn):
    # Creating a simple table
    with conn.cursor() as cursor:
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS example_table (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100),
                age INT
            )
        """)
        conn.commit()

def insert_data(conn, name, age):
    # Inserting data into the table
    with conn.cursor() as cursor:
        cursor.execute("INSERT INTO example_table (name, age) VALUES (%s, %s)", (name, age))
        conn.commit()

def query_data(conn):
    # Querying data from the table
    with conn.cursor() as cursor:
        cursor.execute("SELECT * FROM example_table")
        rows = cursor.fetchall()
        for row in rows:
            print(row)

if __name__ == "__main__":
    # Connect to the PostgreSQL database
    try:
        conn = psycopg2.connect(**db_params)
        print("Connected to the database!")

        # Create table
        create_table(conn)

        # Insert data
        insert_data(conn, "John Doe", 25)
        insert_data(conn, "Jane Doe", 30)

        # Query data
        query_data(conn)

    except psycopg2.Error as e:
        print("Error connecting to the database:", e)

    finally:
        if conn:
            conn.close()
            print("Connection closed.")
