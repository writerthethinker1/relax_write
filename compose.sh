function compose() {

  #BIG NOTE: Only use if located in class folder ./ = {home folder of git repo}
  # you can put this either in your .zshrc or modify into a shell script
  # if you didn't get a prompt saying where the file is, there's probably a typo, make sure things are spelled correctly...

  # declare the year...
  this_date=$(date +"%Y-%m-%d")
  templates_path="./_templates"
  notes_folders=("./_markdown_notes/articles" "./_markdown_notes/books" "./_markdown_notes/coding" "./_markdown_notes/disc_solutions" "./_markdown_notes/exam_solutions" "./_markdown_notes/extra_things" "./_markdown_notes/labs" "./_markdown_notes/practice_solutions" "./_markdown_notes/quiz_solutions" "./_markdown_notes/study_guides" "./_markdown_notes/week_notes" "./_posts/announcements" "./_discussions" "./_your_scores" "./_your_scores" "./_your_scores" "./_musings" "./_your_scores" "./_practice" "./_your_scores")
  # other_templates_path="./_templates"
  topics=("articles" "books" "coding" "disc_solutions" "exam_solutions" "extra_things" "labs" "practice_solutions" "quiz_solutions" "study_guides" "week_notes" "announcements" "discussion" "final_scores" "lab_scores" "midterm_scores" "musings" "practice_scores" "practice" "quiz_scores")
  templates=("articles.md" "books.md" "coding.md" "disc_solutions.md" "exam_solutions.md" "extra_things.md" "labs.md" "practice_solutions.md" "quiz_solutions.md" "study_guides.md" "week_notes.md" "announcements.md" "discussion.md" "final_scores.md" "lab_scores.md" "midterm_scores.md" "musings.md" "practice_scores.md" "practice.md" "quiz_scores.md")


  for i in {1.."${#topics[@]}"} #note: the '#' shows no. of elements, need to for the loop paths...
  do
  	if [ $1 = "${topics[$i]}" ]; then

      # #make the article...
      cat ${templates_path}/${templates[$i]} > ${notes_folders[$i]}/$this_date-$2
      echo "check ${notes_folders[$i]}/$this_date-$2 for the new file..."

    fi

  done

}
