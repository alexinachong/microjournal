# Write Away
### Write Away is a micro-journaling app that imposes a maximum character count as a low-commitment alternative to typical blogging services

## Background and Overview
Many people like the idea of keeping a journal, but find the actual act of writing consistently everyday to be a daunting or time-consuming endeavor that can be difficult to integrate with their other responsibilities. Write Away is a private micro-journal that enforces a maximum character limit to encourage a regular, but low-commitment approach to journaling.

## MVPs and Functionality
### MVPs
- [ ] User authentication & demo login
- [ ] Posts
- [ ] Reminders
- [ ] Tags
- [ ] Photos
- [ ] Graphs

### Functionality
+ User Authentication
  + Journal entries are secured by user accounts.
+ Posts
  + Posts are limited to a maximum of 500 characters each and one post per day.
  + Posts may be updated or deleted.
  + User can filter their post history by: all posts on the same date, all posts on the same day of the month, etc.
+ Reminders
  + App will text user a reminder to post every day.
  + User can reply to text reminder to submit a post.
  + User can set custom reminder messages and times.
+ Tags
  + User can tag posts with keywords.
  + User can filter their posts by tag.
+ Photos
  + User can optionally attach a single photo to each of their journal entries.
+ Graphs
  + Graphs will provide further information about user's journaling behavior, e.g., time of day, length of time spent writing, geolocation, emoji mood graph, etc.

### Bonus Features
+ User can attach a short audio file to their journal entries.
+ Speech-to-text transcription of audio files.
+ Gamification elements: Github-style commit squares to motivate user to maintain posting streak; motivational messages.

## Technologies and Technical Challenges
Python/Django backend + PostgreSQL database + JavaScript/React/Redux frontend
Possible Twilio API for text message reminders

### Technical Challenges
+ Setting up Django
+ Learning how to use PostgreSQL with Django
+ Understanding how to make models, controllers, and views in Django
+ Connecting Django with React/Redux
+ Using D3.js or Chart.js to make charts for the post data
+ Integrating Twilio API for text message reminders

## Group Members and Work Breakdown
Rewel Garcia, David Harris, and Alexina Chong

### Weekend 1
- [x] Set up Python3 and Django locally **(ALL)**
- [x] Learn Python **(ALL)**
- [x] Begin learning Django **(ALL)**
- [x] Begin implementing user authentication **(David & Rewel)**
- [x] Finalize proposal **(Alexina)**

### W11D1
- [ ] Work on first draft of wireframes **(Alexina)**
- [ ] Set up database **(David & Rewel)**
- [ ] Finish implementing user authentication **(David & Rewel)**
- [ ] Work on `posts` **(ALL)**
- [ ] Make a model, view, and template for `posts` **(David & Rewel)**
  - [ ] Model: `message`, `user_id`
  - [ ] Views: **(David & Rewel)**
    - [ ] Index of posts
    - [ ] Create post
    - [ ] Update post
    - [ ] Show post
    - [ ] Delete post
  - [ ] Templates: **(Alexina)**
    - [ ] 'Create post' button should disappear if a post has already been created that day.
    - [ ] User should be able to add entries for any missed days.
- [ ] Work on homepage design **(Alexina)**

### W11D2
- [ ] Finish implementing `posts`
- [ ] Work on `reminders` **(ALL)**
- [ ] Make a model, view, and template for `reminders` **(Rewel)**
  - [ ] Model: `date`, `time`, `frequency`, `message`
  - [ ] Views: **(Rewel)**
    - [ ] Index of reminders
    - [ ] Create reminder
    - [ ] Update reminder
    - [ ] Show reminder
    - [ ] Delete reminder
  - [ ] Templates: **(Alexina)**
    - [ ] User may have multiple reminders with custom messages and frequencies.
    - [ ] Implement recurring event date/time picker (similar to Google calendar reminders).
  - [ ] Integrate Twilio API for text message reminders **(Rewel)**

### W11D3
- [ ] Work on `tags` **(ALL)**
- [ ] Make a model, view, and template for `tags` **(ALL)**
  - [ ] Model: `message`, `post_id`, `user_id`
  - [ ] Views: **(ALL)**
    - [ ] Index of tags
    - [ ] Create tag
    - [ ] Update tag
    - [ ] Show tag (all posts tagged with that tag)
    - [ ] Delete tag
  - [ ] Templates: **(Alexina)**
    - [ ] A post may have many associated tags.
    - [ ] A tag may be assigned to multiple posts.
    - [ ] Tags are searchable. (Implement dynamic search.)
  - Finalize overall site design **(Alexina)**

### W11D4
- [ ] Work on `photos` **(ALL)**
- [ ] Make a model, view, and template for `photos` **(David)**
  - [ ] Model: `photo_url`, `post_id`, `user_id`
  - [ ] Views: **(David)**
    - [ ] Index of photos
    - [ ] Create photo
    - [ ] Show photo (modal)
    - [ ] Delete photo
  - [ ] Templates: **(David & Alexina)**
    - [ ] Ability to attach a photo to a post.
    - [ ] 'Upload photo' button should disappear if a photo has already been attached to that post.
- Set up Cloudinary/AWS to store photos. **(David)**

### W11D5
- [ ] Work on graphs **(ALL)**
- [ ] Implement using D3.js or Chart.js. **(David & Alexina)**
- [ ] Graphs should show different aspects of journaling behavior, such as:
  - [ ] Time of day
  - [ ] Length of time spent writing
  - [ ] Geolocation?
  - [ ] Emoji mood graph

### Weekend 2
- [ ] Finish styling **(ALL)**
- [ ] Make demo user account
- [ ] Populate seed data
