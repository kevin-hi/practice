class Graph {
    constructor(V) {
        this.V = V;
        this.E = 0;
        this.s;
        this.adj = [];
        this.marked = [];
        this.count = 0;
        this.edgeTo = [];
        for (let v = 0; v <= V; v++) {
            this.adj[v] = [];
        }
    }

    getV() {
        return this.V;
    }

    getE() {
        return this.E;
    }

    addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.E++;
    }

    depthFirstSearch(s) {
        this.s = s;
        this.dfs(s);
    }

    dfs(s) {
        console.log(s);
        this.marked[s] = true;
        this.count++;
        for (let i = 0; i < this.adj[s].length; i++) {
            const adjValue = this.adj[s][i];
            if (!this.marked[adjValue]) {
                this.dfs(adjValue);
                this.edgeTo[adjValue] = s;
            }
        }
    }

    breathFirstSearch(s) {
        this.s = s;
        this.bfs(s);
    }

    bfs(s) {
        const q = [s];
        this.marked[s] = true;
        while (q.length) {
            const v = q.shift();
            console.log(v);
            for (let i = 0; i < this.adj[v].length; i++) {
                const adjValue = this.adj[v][i];
                if (!this.marked[adjValue]) {
                    q.push(adjValue);
                    this.marked[adjValue] = true;
                    this.edgeTo[adjValue] = v;
                }
            }
        }
    }

    pathTo(v) {
        if (!this.hasPathTo(v)) return;
        const path = [];
        for (let x = v; x != this.s; x = this.edgeTo[x]) path.push(x);
        path.push(this.s);
        return path.reverse();
    }

    hasPathTo(v) {
        return this.marked[v];
    }

}

const graph = new Graph(6);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 6);
graph.addEdge(0, 5);
graph.addEdge(6, 4);
graph.addEdge(4, 5);
graph.addEdge(4, 3);
graph.addEdge(3, 5);

// graph.depthFirstSearch(0);
graph.breathFirstSearch(0);
// console.log(graph.pathTo(3));

console.log(graph);
