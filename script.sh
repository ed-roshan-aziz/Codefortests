# Initialize a new Git repository in the current directory:
git init

# Add all files in the current directory to the staging area:
git add .

# Sets the global user email configuration 
# replace "you@something.com" with your own email id:
git config --global user.email "you@something.com"

# Sets the global user name configuration
# replace "UserName" with your own user name:
git config --global user.name "UserName"

# Commits the changes to the local repository with a 
# commit message of "test":
git commit -m "Running pipeline"

# Adds a remote repository named "origin" 
# replace <remote repository URL> with your own gitlab URL:
git remote add origin https://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@github.com/ed-roshan-aziz/Codefortests.git


# The command "git branch -M main" is used to 
# rename the current branch to "main" in a Git repository:
git branch -M main

# Pushes the changes to the remote repository 
# named "origin" on the "master" branch:
git push -u origin main