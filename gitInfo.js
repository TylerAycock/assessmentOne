/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = `Git is a version control system that allows people to track cahnges to code project. Takes a "snapshot" of your work and is usefull for preventing bugs from wrecking the entire code and loss of progress in case of a computer crash.`
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = `This is a cloud based repository that allows programmers to store and manage their code, as well as track and control changes to their code.`
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition = `This initializes the local repository in the local computer/folder.`
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
let gitCloneDefinition = 'This is a git command that can be used to target an existing repository and create a clone/copy of that repository.'
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDefinition = `This is a git command that displays the state of the working directory and the staging area. It shows you which changes have been staged / which haven't, and which files aren't being tracked by Git. `
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDefinition = `This git command adds a change in the working directory to the staging area. This doesn't effect the repository in a meaningful way until you input git commit -m ""`
let gitAddCode = 'git add .'
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitDefinition = `This git command creates a snapshot of the working repository which can then be sent to GitHub with a git push `
let gitCommitCode = `git commit -m "initial commit"`

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
let gitPushDefinition = `This git command is used to upload a local repository to a remote repository such as GitHub.`