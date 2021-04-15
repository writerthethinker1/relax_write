# an upload helper utility function...updated for error handling...
# basically does the 'cp' command without all the usual syntax...handy and easier

function upload() {
  # args: [subject] and [path/to/file or path/to/dir]
  # method: will move files or dir to the notes_upload dir, just to make things easy
  # please be in ./[your class name] and run form there, o/w code won't work...

  if [ $# -eq 2 ];
  then

    if [ ! -d ${2} ] && [ ! -f ${2} ]; then

      echo "need valid directory or file path...typo?"

    else

      notes_up_folders=("articles" "books" "coding" "discussion_stuff" "exam_solutions" "extra_things" "labs" "practice_solutions" "quiz_solutions" "study_guides" "week_notes")
      # a vector of the target folders...
      upload_base="./notes_upload"
      is_inside="false"

      for i in "${notes_up_folders[@]}" #note: the '#' shows no. of elements
      do
      	if [ $1 = $i ]; then

            cp $2 ${upload_base}/${i}

            echo "uploaded the file! check ./notes_upload/${i} for the file..."
            is_inside="true"

        fi

      done

      if [ ${is_inside} = "false" ]; then

        echo "can't upload to '${1}'...use names exactly in ./notes_upload...typo maybe?"

      fi

    fi

  else

    echo "need topic as well as the path to the file, 2 arguments..."

  fi

}
