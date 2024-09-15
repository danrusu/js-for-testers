# Git & GitHub

```text
“Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.”
- Antoine de Saint-Exupéry
```

![](../resource/image/octocat.png)

## Content

- [Git \& GitHub](#git--github)
  - [Content](#content)
    - [1. Git](#1-git)
      - [1.1 Simplest flow](#11-simplest-flow)
    - [2. Bash (GitBash)](#2-bash-gitbash)
      - [2.1 Basic commands](#21-basic-commands)
      - [2.2 Copy/Paste Selected text in CLI](#22-copypaste-selected-text-in-cli)
      - [2.3 Setting variables](#23-setting-variables)
      - [2.4 Bash profile file](#24-bash-profile-file)
    - [3. vi (CLI visual editor)](#3-vi-cli-visual-editor)
    - [4. GitHub](#4-github)

### 1. [Git](https://git-scm.com)

- Install from [downloads page](https://git-scm.com/downloads) - choose **GitBash**

- [Git documentation](https://git-scm.com/doc)
  - [Pro Git - 2nd Edition (2014)](https://git-scm.com/book/en/v2)

![](../resource/image/gitStages.png)

#### 1.1 Simplest flow

```bash
# 1. Create a github project
# 2. Clone the project from GitHub (or other remotes)
cd dev_directory
git clone git@github.com:danrusu/js-for-testers.git # this is using SSH keys
cd js-for-testers
ls -all
git remote -v # print remotes (only one in our case with an alias of origin)
git branch # show local branches; current branch has a * in front
git branch -r # show remote branches
git pull # update local repository

# 3. Create a new development branch
git checkout -b dev-branch # creates a new branch and checks it out; usualy there is a branch naming convention
git branch # the current branch should be dev-branch

# 4. Start development - create/delete/edit files

# 5. Stage new files
git status # check file differences
git add -A # you can use 'git add .'
git status

# 6. Commit changes to local repository
git commit -m "fixed bug 124"
git status # local branch contains all changes

# 7. Push the branch to the remote repository
git push
```

### 2. Bash (GitBash)

`Use TAB key for path autocompletion/suggestions!`

`Bash knowledge will help when working with Docker.`

- `.` represents current folder
- `..` represents parent folder
- `/` is the path separator (linux style)
- `~` is the user home directory

#### 2.1 Basic commands

```bash
command_name --help # prints the help information for the command_name command

cd # changes current directory to home directory; same as 'cd ~'
pwd # print working (current) directory
cd - # toggle to previous work directory

ls # list all files in current directory
mkdir git_bash_demo # creates git_bash_demo directory

cd git_bash_demo # change current directory to git_bash_demo

touch file.txt # create new file
echo "first line" > file.txt # creates file.txt and writes "first line" in it
echo "second line" >> file.txt # appends "second line" to file.txt
ls -all
cat file.txt # prints file.txt content
rm file.txt # deletes file.txt; to remove a folder add a -r (recursive) flag; use -f to force deleting a file/folder

alias gs='git status' # set an alias for a command
alias gs # print an existing alias
alias # print all aliases
gs
unalias gs # remove alias
```

#### 2.2 Copy/Paste Selected text in CLI

- Copy - `CTRL + INSERT`
- Paste - `SHIFT + INSERT`

#### 2.3 Setting variables

| Variable type        | Command                                                       | Description                                              |
| -------------------- | ------------------------------------------------------------- | -------------------------------------------------------- |
| shell variable       | `MY_API_TOKEN='api_token_1234'`                               | available only in the current shell                      |
| environment variable | `export MY_PASSWORD='pass0rd'`                                | available in all child processes created from that shell |
| global variable      | add `export MY_GLOBALT_TOKEN='abc***xyz'` to the bash profile | available in all bash terminals                          |

#### 2.4 Bash profile file

- location (preferred): `~/.profile`
- it is a good place for saving aliases and global environment variables
- this is a bash file so you can also create global functions within

### 3. vi (CLI visual editor)

```bash
vi file_name # open the file for editing
```

vi basic usage

- `INSERT` or `i` - enter insert mode
- `ESC` - enter command mode

  | Command (in command mode, followed by ENTER) | Description                                       |
  | -------------------------------------------- | ------------------------------------------------- |
  | **:q**                                       | close file without saving if no changes were made |
  | **:q!**                                      | force closing without saving if changes were made |
  | **:wq** or **:x**                            | save changes and then close the file              |
  | :line_number                                 | go to a specific line number                      |
  | **dd**                                       | delete current line                               |
  | **yy**                                       | yank (copy) current line                          |
  | **p**                                        | paste copied text                                 |
  | **/word**                                    | search for word (forward)                         |

### 4. [GitHub](https://github.com)
