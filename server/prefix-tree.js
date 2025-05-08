var TrieNode = function() {
  this.subjects_map = {};
  this.courses = [];
}

var Trie = function() {
  this.root = new TrieNode();
};


// insert a new node into the prefix tree
Trie.prototype.insert = function(subject_numbers, course_id) {
  let node = this.root;
  for (let s of subject_numbers) {
    if (s == '') {
      break;
    }
    if (node.subjects_map[s] == null) {
      node.subjects_map[s] = new TrieNode();
    }
    node = node.subjects_map[s];
  }
  node.courses.push(course_id);
};

// helper function to traverse to a given subject_ids list
Trie.prototype.traverse = function(subject_numbers) {
  let node = this.root;

  for (let s of subject_numbers) {
    if (s == "") {
      continue
    }
    node = node.subjects_map[s];
    if (node == null) return null;
  }
  return node;
};

// traverses to the correct node of the prefix tree given the subject_ids and returns the courses
Trie.prototype.search_courses = function(subject_numbers) {
  let node = this.traverse(subject_numbers);

  return node.courses;
};

module.exports = Trie;