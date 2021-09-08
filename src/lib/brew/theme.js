
export class ThemeBrewer {
  constructor() {
    this.patterns = []
    this.shapes = []
    this.palette = []
    this.defaultss = {}
  }

  /**  
   * 
  */
  set patterns(patterns){
    this.theme[patterns] = patterns
  }
  addPatterns(patterns){
    this.patterns = patterns
  }

  brew(names)
}
