# TeamApp Project

## Background
As part of the interview process with TeamApp I was set a task as follows.

__Task__\
Create a CRUD app with Ruby in which a user can:
  - Create an account (using 3rd party authorization preferably Google Firebase)

  - Sign in to that account (again using the 3rd party auth)

  - Choose to create a team

  - Create a player for the team (first name and last name)

__Tools to be used__\
Ruby to build site
Postgres database
Google Firebase authorisation
Theme provided [https://themeforest.net/](https://themeforest.net/)

## My Plan
__Things to get done__
- [Completed] Look at Firebase - [https://firebase.google.com/products/auth/](https://firebase.google.com/products/auth/)

- [Completed] Quick site mock up with Figma

- [Completed] Start a Trello

- [Completed] Get back to Glenn with my proposed timing (current thinking two weeks due to full time work)

- [On-Going] Make a list of questions for Glenn

- [Completed] Create github repo -
[https://github.com/peytr/teamapp-project](https://github.com/peytr/teamapp-project)

## Steps Taken
The following is a space to track my progress, steps I have taken through the process.

__Saturday 6th__
- Created this file

- Created a Trello Board and invited Babs as collaborator\
![/images/trello.png](/app/assets/images/readme/trello.png)

- Designed a database using dbdesigner\
![/images/dbdesign.png](/app/assets/images/readme/dbdesign.png)

- Created a wireframe using Figma\
![/images/figma.png](/app/assets/images/readme/figma.png)

- Had a quick look at Firebase

- Had a look at the required theme

- Emailed Glen requesting screen shots of his proof of concept

- Started looking at creating a rails test app to get re-familiarized (decided to get straight into the app)

- Created GitHub repo named teamapp-teamdb

- Researched using uuid with Rails found a great article showing how to automate adding uuid to each model - [https://blog.bigbinary.com/2016/04/04/rails-5-provides-application-config-to-use-uuid-as-primary-key](https://blog.bigbinary.com/2016/04/04/rails-5-provides-application-config-to-use-uuid-as-primary-key)

- Following Rails docs to get started with creating the app

- Created master branch with rails new, will branch off to dev and work off of dev branch

- Setting up database, rails new defaults to sqlite3 database, as per the rails docs used the code below to rewrite the rails app with a postgresql database setup
```
cd .. && rails new teamapp-teamdb --database=postgresql
```

- rails new with the postgres setup errored as follows: 
```
An error occurred while installing pg (1.1.3), and Bundler cannot
continue. Make sure that `gem install pg -v '1.1.3' --source 'https://rubygems.org/'`
succeeds before bundling.
```

- Looking for the location of my pg_config file to correctly install the pg gem. Proving difficult!? Finally located the pg_config file here.
```
/Applications/Postgres.app/Contents/Versions/10/bin
```

- the issue was I could not find the folder that contains all the installed applications. The ~/ in terminal is at me, the user. I had to cd .. a couple of times to get to the MacHD root which is where the Applications folder lives. Anyway gem installed with no issues, bundled and pushed the new rails new install to master.

- Before continuing on I will check out the Heroku set up with Git, might be easier to setup earlier than later? No need to setup on on Heroku now, only when ready for deploy.

- Branching off to setup database

- Came across the following when researching how/where to store the database production password, rails uses something new now, a credentials master key - [https://blog.eq8.eu/til/rails-52-credentials-tricks.html](https://blog.eq8.eu/til/rails-52-credentials-tricks.html)

- further research resources as follows - [https://www.engineyard.com/blog/rails-encrypted-credentials-on-rails-5.2](https://www.engineyard.com/blog/rails-encrypted-credentials-on-rails-5.2)
- able to edit credentials via 
```
EDITOR="code --wait" bin/rails credentials:edit
```

- A bit of time spent on setting up the database password so far. Another great resource found here - [https://medium.com/craft-academy/encrypted-credentials-in-ruby-on-rails-9db1f36d8570](https://medium.com/craft-academy/encrypted-credentials-in-ruby-on-rails-9db1f36d8570)

- Finally got into the credentials.yml file, first attempt didn't work? Now to edit and see if works.

- Says in the Rails 5.2 credentials first link above to not store postgresql production password in the credentials.yml file! Have moved on from this as currently there is no need to setup a production password until I am ready to deploy production.

- Also realised the ruby guide I was referring to was very old. Am now on a version 5.1 guide and working out what to do next.

- So running rails s raised a database error, no teamapp-teamdb database. Was contemplating creating a new test app, still am but found in my research of starting a new test app with postgresql that I need to run rails db:setup for the database to be created.

- Spent the day going through the Ruby on Rails 5.1 getting started guide which guides you through creating an articles app. I did so using the postgresql database instead of the default sqlite3 that rails new creates. Very glad I went this route as I needed the re-familiarization. There has been a few changes since I was last playing with rails. Also will be able to use a huge amount of what I have created with the teamapp app.

- Now that I have created the rails guide articles app I will style it using the theme that Glen has requested I use.

- Some postgresql resources - [https://coderwall.com/p/dovmsg/how-to-make-your-rails-app-start-talking-to-a-postgres-database](https://coderwall.com/p/dovmsg/how-to-make-your-rails-app-start-talking-to-a-postgres-database)

__Sunday 7th__

Bit slow getting started today for a couple of reasons out of my control.

- Got a great base for the app done yesterday using the rails guide. Can use a lot of it for the teamapp-teamdb.

- Started looking at how to implement the bootstrap admin theme. Found some good links. - [https://medium.com/@frontted/from-rails-5-to-bootstrap-4-responsive-admin-dashboard-template-1de103c6216c](https://medium.com/@frontted/from-rails-5-to-bootstrap-4-responsive-admin-dashboard-template-1de103c6216c) - and - [https://medium.com/@chan0123/integrate-custom-bootstrap-theme-in-rails-9e78070e6ba](https://medium.com/@chan0123/integrate-custom-bootstrap-theme-in-rails-9e78070e6ba)

- Following the second link above to attempt getting the required theme styling added to the test app created yesterday.

- Cloned the theme repo to the teamapp folder and npm installed.

- No luck with getting the requested theme to work.

- Renamed styling branch to styling-first-try

- Branched off master again to a new branch styling-bootstrap-admin to follow one of the tutorials

- Got bootstrap to work, need to continue with implementing theme as in the tutorial
**Need to speak to Glen about using a theme that I can easily work with or just use whatever I want and explain later**

__Monday 8th__
- Bootstrap is working with my app on the second branch following the tutorial, need to continue to implement the theme.

- Continued to follow tutorial to implement the theme, coming across heaps of errors with the stylesheets missing other stylesheet imports causing unknown variables - [https://eddyerburgh.me/use-bootstrap-4-media-query-mixins](https://eddyerburgh.me/use-bootstrap-4-media-query-mixins)
- No luck with second styling branch, error after error when ruby is trying to compile, moving on.

__Tuesday 9th__
- changing rails ports - [https://medium.com/@yelstin.fernandes/how-to-automatically-change-ports-in-rails-when-the-default-is-in-use-7ee0f04821c2](https://medium.com/@yelstin.fernandes/how-to-automatically-change-ports-in-rails-when-the-default-is-in-use-7ee0f04821c2)

- As mentioned yesterday, no luck with the first bootstrap tutorial so started on the second one today. Is going well. Came across the following issue.

- Tutorial says to add gem 'font-awesome-rails' which is no problem. Then says to add *= require font-awesome to the application.css file which throws an error when rails tries to compile. Research came across this - [http://fuzzyblog.io/blog/rails/2017/01/24/rails-tutorial-making-font-awesome-work-with-rails-5.html](http://fuzzyblog.io/blog/rails/2017/01/24/rails-tutorial-making-font-awesome-work-with-rails-5.html) - as suggested used @import 'font-awesome'; and removed the require and all good!

- found and downloaded free matrix admin theme (best table with sort, search and pagination)

- Setting up for Matrix Basic Table:

  CSS
  - /assets/extra-libs/multicheck/multicheck.css (imported)
  - /assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.css (imported)
  - /dist/css/style.min.css (imported)

  JS
  - /assets/libs/jquery/dist/jquery.min.js (imported)
  - /assets/libs/popper.js/dist/umd/popper.min.js (imported)
  - /assets/libs/bootstrap/dist/js/bootstrap.min.js (imported)
  - /dist/js/custom.min.js (imported)
  - /assets/extra-libs/multicheck/datatable-checkbox-init.js (imported)
  - /assets/extra-libs/multicheck/jquery.multicheck.js (imported)
  - /assets/extra-libs/DataTables/datatables.min.js (imported)
  - 
  GEMS
  - jquery (installed)
  - popper (installed)
  - boostrap (installed)

- Need to work out how to require / import css and custom js files

- Added in required css and js links to application.js and application.css

- Need to work out how to add filtering, searching and pagination to table

__Wednesday 10th__
- Found free Matrix admin theme does not include filtering in basic table. Options are to work out how it works or pay for the theme and copy it in. My preference is for the latter, it is only $29 and is worth the investment. At least I will own the whole theme to use at my leisure.

- Tonight though, when I get home, I will have to concentrate on getting WWT live. Take a day off tomorrow and code all day on teamapp.

- Buying the Matrix theme for once off use will cost me $40 AUD, unlimited use $100 AUD. Not willing to pay $100 for this at the moment. Will probably go the single use as this may not even go live. Also looked at implementing sorting via rails, doable but the initial research shows that it won't be an easy setup. For ease and due to timing I will pay the $40 and get it done.

__Thursday 11th__
- Spent the evening working on WWT with no progress !?$% but had to be done.

- Babs has had some major progress with firebase though

__Friday 12th__
- Renamed articles repo to teamapp-project. Caused some issues with local git but sorted by changing the local to ssh rather than https.

- Merged Babs pull request implementing firebase to the app.

- Almost done with the implementing the table with click sort and search function

- Found a great codepen - [https://codepen.io/Peytr/pen/qJjKjg?editors=1010](https://codepen.io/Peytr/pen/qJjKjg?editors=1010) - for table filtering and searching.

- for some reason the erb is showing in the table is html? Working on that now. Babs is looking at hiding the firebase keys.

- Great article when researching why show, edit, delete are rendering as html - [https://launchschool.com/blog/integrating-rails-and-bootstrap-part-2](https://launchschool.com/blog/integrating-rails-and-bootstrap-part-2)

- Took me ages but finally got table sorting and searching and pagination working!!

- Great resource for tables - [https://datatables.net/manual/installation](https://datatables.net/manual/installation) and [https://datatables.net/](https://datatables.net/)

__Saturday 13th__
- Today I will start by renaming and reconfiguring the app for teams.

- Steps
  - Follow steps found to rename rails app
  - Implement uuid
  - Update existing migrations, articles to teams, comments to players
  - Add table for accounts

- Got uuid working with this - [https://lab.io/articles/2017/04/13/uuids-rails-5-1/](https://lab.io/articles/2017/04/13/uuids-rails-5-1/)

- Need to add link between player and team.

- Added uuid to the app

- Added team and player controllers and models, having trouble adding the reference between team and players, following error is raised
```
DETAIL:  Key columns "team_id" and "id" are of incompatible types: bigint and uuid.
```

- Issue has been raised in rails repo (feb 2016) but closed with no resolution - [https://github.com/rails/rails/issues/23422](https://github.com/rails/rails/issues/23422) looking for a work around.

__Sunday 14th__
- Seemingly successfully added team and player tables with uuid reference from player to team. Links used -
[https://lab.io/articles/2017/04/13/uuids-rails-5-1/](https://lab.io/articles/2017/04/13/uuids-rails-5-1/)
[https://alternatelabs.co/blog/postgresql-uuid-primary-keys-in-rails-5](https://alternatelabs.co/blog/postgresql-uuid-primary-keys-in-rails-5)

- Didn't use this but great resource - 
[http://www.madebyloren.com/posts/migrating-to-uuids-as-primary-keys](http://www.madebyloren.com/posts/migrating-to-uuids-as-primary-keys)

- And another excellent resource - [https://medium.com/into-the-forest/rails-migrations-tricks-guide-code-cheatsheet-included-dca935354f22](https://medium.com/into-the-forest/rails-migrations-tricks-guide-code-cheatsheet-included-dca935354f22)

- Next change/create team view using current article setup, add players to team

- Created team and player views as required.

- Next: 
  - add individual player view and show link in table
  - add player edit and edit link in table

- Team and Player views created, some bugs and edit player not working.

- Start work with styling or sort bugs?

__Monday 15th__
- Spent a couple of hours working on the app after work. Sorted out the data table refresh bug, found the fix -[https://stackoverflow.com/questions/40194566/rails-search-form-works-only-after-reloading-page](https://stackoverflow.com/questions/40194566/rails-search-form-works-only-after-reloading-page) - it was to do with turbolinks which caches the page and only reloads the page on manual reload therefore the jquery function required to load the table data only wasn't run until page reload.

- Next working on sorting the player edit route issue, possibly also a turbolinks problem? will disable and see.

__Tuesday 16th__
- Barbs has firebase working.

- I got functionality almost working, one last issue is player edit not working.

- Both branches, firebase and team-create have been merged with master.

- App confirmed working with a few minor fixes required and two bugs remaining as listed below:

  **Minor Fixes**
  - loading... showing all the time on home page
  - remove articles link
  - redirect to home page on signout

  **Bugs**
  - firebase signout button and user image doesnt render unless page is reloaded
  - player edit adds new player instead of editing player

- Minor fixes sorted. Moving on to theme styling. Still some major items required such as accounts and linking teams to accounts so that when signed in can only see your teams. And protected routes.

- Moving on to theme styling for now.
- Transferred adminx html head content
- Next: transfer in css and js as listed in head
- [https://stackoverflow.com/questions/25983283/how-to-load-vendor-asset-folder-in-rails-4](https://stackoverflow.com/questions/25983283/how-to-load-vendor-asset-folder-in-rails-4)
- [https://stackoverflow.com/questions/30819591/application-html-erb-to-render-different-partial-depending-on-the-page-user-is-o](https://stackoverflow.com/questions/30819591/application-html-erb-to-render-different-partial-depending-on-the-page-user-is-o)

__Wednesday 17th__
- Adding theme was a lot of work, decided in the short time remaining to add bootstrap styling.

- Working on deploying to heroku, some issues as always!!

- Also still the following bugs to work on:

**Bugs**
  - firebase signout button and user image doesnt render unless page is reloaded

  - player edit adds new player instead of editing player

- Sent link to Glen. Waiting for email confirmation for presentation.

# Steps to remember when creating teamapp app
- generate rails controllers as such
```
rails g controller page index --skip-stylesheets --skip-javascripts
```

- if installing font-awesome-rails use @import 'font-awesome'; instead of *= require in the application.css

- Don't forget to add uuid as part of setup, see -[https://blog.bigbinary.com/2016/04/04/rails-5-provides-application-config-to-use-uuid-as-primary-key](https://blog.bigbinary.com/2016/04/04/rails-5-provides-application-config-to-use-uuid-as-primary-key)


# My steps for importing bootstrap theme
1. Download theme
2. Choose what to import
3. Copy across the required html
4. Understand which css and javascript files are required
5. Copy across required css and javascript files
6. Link to required css and javascript in required files, application.css etc
6. Reverse engineer to understand which gems are required and install
see this article [here](https://viblo.asia/p/how-to-integrate-custom-bootstrap-theme-in-rails-l0rvmxrAGyqA)

# Bugs
__Datatable jquery__
- Cut css from jquery.datatables.min.css
```css
table.dataTable thead .sorting{background-image:url("../images/sort_both.png")}table.dataTable thead .sorting_asc{background-image:url("../images/sort_asc.png")}table.dataTable thead .sorting_desc{background-image:url("../images/sort_desc.png")}table.dataTable thead .sorting_asc_disabled{background-image:url("../images/sort_asc_disabled.png")}table.dataTable thead .sorting_desc_disabled{background-image:url("../images/sort_desc_disabled.png")}
```

- Above code goes here
```css
*cursor:hand;background-repeat:no-repeat;background-position:center right} -> | <- table.dataTable tbody tr
```
- Requiring datatables css and js
```
*= require xtreme/jquery.datatables.min.css
//= require xtreme/jquery.datatables.min.js
```

- Tried recopying css and js for datatables, arrows gone new arrows in place but still requires refresh to show anything. Arrow images still wont show unless made up route is included in routes.rb.

- Next look at placing of jquery function maybe this is the problem.

- Sorted locally but not working deployed on Heroku.

__Player Edit__
- Cant work our route for player edit, edit player adds new player.

# Future Updates / To-do's
- Bigger player profile to include first name last name dob etc

- Protected routes

- Need accounts db so when logged in only see users teams