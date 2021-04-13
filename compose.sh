# a markdown making file helper function, put inside your .zshrc or modify for local use...
# saves time making files and gives a template!

function compose() {

  #BIG NOTE: Only use if located in class folder ./ = {home folder of git repo}

  if [ $# -eq 2 ];
  then


    # declare the year...
    this_date=$(date +"%Y-%m-%d")
    is_inside="false"
    templates_path="./_templates"
    notes_folders=("./_markdown_notes/articles" "./_markdown_notes/books" "./_markdown_notes/coding" "./_markdown_notes/disc_solutions" "./_markdown_notes/exam_solutions" "./_markdown_notes/extra_things" "./_markdown_notes/labs" "./_markdown_notes/practice_solutions" "./_markdown_notes/quiz_solutions" "./_markdown_notes/study_guides" "./_markdown_notes/week_notes" "./_posts/announcements" "./_discussions" "./_your_scores" "./_your_scores" "./_your_scores" "./_musings" "./_your_scores" "./_practice" "./_your_scores")
    # other_templates_path="./_templates"
    topics=("articles" "books" "coding" "disc_solutions" "exam_solutions" "extra_things" "labs" "practice_solutions" "quiz_solutions" "study_guides" "week_notes" "announcements" "discussion" "final_scores" "lab_scores" "midterm_scores" "musings" "practice_scores" "practice" "quiz_scores")
    templates=("articles.md" "books.md" "coding.md" "disc_solutions.md" "exam_solutions.md" "extra_things.md" "labs.md" "practice_solutions.md" "quiz_solutions.md" "study_guides.md" "week_notes.md" "announcements.md" "discussion.md" "final_scores.md" "lab_scores.md" "midterm_scores.md" "musings.md" "practice_scores.md" "practice.md" "quiz_scores.md")

    for i in {1.."${#topics[@]}"} #note: the '#' shows no. of elements
    do
    	if [ $1 = "${topics[$i]}" ]; then

        # #make the article...
        cat ${templates_path}/${templates[$i]} > ${notes_folders[$i]}/$this_date-$2.md
        echo "check ${notes_folders[$i]}/$this_date-$2.md for the new file..."
        is_inside="true"
      fi

    done

    if [ ${is_inside} = "false" ]; then

      echo "can't compose to '${1}'. it's not a folder in ./materials/notes/...typo, maybe?"

    fi

  else

    echo "need both topic as well as the file name and extension, 2 arguments..."

  fi

}
