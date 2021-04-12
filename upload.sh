# an upload helper utility function...

function upload() {
  # args: [subject] and [path/to/file or path/to/dir]
  # method: will move files or dir to the notes_upload dir, just to make things easy
  # please be in ./[your class name] and run form there, o/w code won't work...

  if [ $# -eq 2 ];
  then

  notes_up_folders=("articles" "books" "coding" "discussion_stuff" "exam_solutions" "extra_things" "labs" "practice_solutions" "quiz_solutions" "study_guides" "week_notes")
  # a vector of the target folders...
  upload_base="./notes_upload"


  for i in "${notes_up_folders[@]}" #note: the '#' shows no. of elements
  do
  	if [ $1 = $i ]; then

      cp $2 $upload_base/$i
      echo "uploaded the file! check ./notes_upload in the right folder..."

    fi

  done

  else

    echo "can't upload to that folder...use names exactly as in ./notes_upload/"

  fi
}
