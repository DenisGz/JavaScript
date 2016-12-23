function Article() {
  Article.created = new Date();
  
  

  Article.count++;

//...
}
Article.count = 0;

Article.showStats = function() {
  alert('всего выпусков: ' + this.count + ' дата последнего выпуска: ' + this.created); // (1)
}
 

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)


new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)