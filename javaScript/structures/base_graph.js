module.exports.BaseGraph = class {
  constructor() {}
  createVertex(data) {}
  addDirectedEdge(source, destination) {}
  edges(source) {}
  weight(source, destination) {}

  addUndirectedEdge(source, destination, weight = 0) {
    this.addDirectedEdge(source, destination, weight);
    this.addDirectedEdge(destination, source, weight);
  }

  add(edgeType, source, destiantion, weight) {
    switch (`${edgeType}`) {
      case "directed":
        this.addDirectedEdge(source, destiantion, weight);
        break;
      case "undirected":
        this.addUndirectedEdge(source, destiantion, weight);
        break;
      default:
        break;
    }
  }
};
