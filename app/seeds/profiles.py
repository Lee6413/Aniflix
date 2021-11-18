from app.models import db, Profile

# Adds a demo user, you can add other users here if you want
def seed_profiles():
  demo = Profile(
    name="demo", user_id=1, avatar_id=1)
  test1 = Profile(
    name="test1", user_id=1, avatar_id=2)
  test2 = Profile(
    name="test2", user_id=2, avatar_id=3)

  db.session.add(demo)
  db.session.add(test1)
  db.session.add(test2)

  db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_profiles():
  db.session.execute('TRUNCATE profiles RESTART IDENTITY CASCADE;')
  db.session.commit()
