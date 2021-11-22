from app.models import db, Avatar


# Adds a demo user, you can add other users here if you want
def seed_avatars():
  Light = Avatar(
    image_url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1XjeJZhnXH8kj9vA6qoGcLKJccYdWVUy4Q&usqp=CAU')
  Misa = Avatar(
    image_url='https://cdn.myanimelist.net/images/characters/5/30971.jpg')
  L = Avatar(
    image_url='https://data.whicdn.com/images/103060175/original.jpg')

  db.session.add(Light)
  db.session.add(Misa)
  db.session.add(L)

  db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_avatars():
  db.session.execute('TRUNCATE avatars RESTART IDENTITY CASCADE;')
  db.session.commit()
