from app.models import db, Avatar


# Adds a demo user, you can add other users here if you want
def seed_avatars():
  Light = Avatar(
    image_url='https://i.ibb.co/7jNHhtY/img-chara-01.png')
  Misa = Avatar(
    image_url='https://www.seekpng.com/png/full/384-3846696_goku-face-dragon-ball-z-the-complete-collection.png')
  L = Avatar(
    image_url='https://i.ibb.co/B60zb0g/Naruto-Shippuden-Uzumaki-Naruto-Jacket.png')

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
