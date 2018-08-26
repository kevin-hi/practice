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
        this.stack = [];
    }

    getV() {
        return this.V;
    }

    getE() {
        return this.E;
    }

    addEdge(v, w) {
        this.adj[v].push(w);
        //Uncomment below to enable undirected graph
        // this.adj[w].push(v);
        this.E++;
    }

    topologySort(s) {
        this.s = s;
        for (let i = 0; i < this.adj.length; i++) {
            if(this.adj[i].length) this.dfsTopology(i);
        }
        console.log(this.stack.reverse());
    }

    dfsTopology(s) {
        this.marked[s] = true;
        this.count++;
        for (let i = 0; i < this.adj[s].length; i++) {
            const adjValue = this.adj[s][i];
            if (!this.marked[adjValue]) this.dfsTopology(adjValue);
        }
        this.stack.push(s);
    }

    depthFirstSearch(s) {
        this.s = s;
        this.dfs(s);
    }

    dfs(s) {
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
        for (let x = v; x !== this.s; x = this.edgeTo[x]) path.push(x);
        path.push(this.s);
        return path.reverse();
    }

    hasPathTo(v) {
        return this.marked[v];
    }

}

const graph = new Graph(7);

// graph.addEdge(0, 1);
// graph.addEdge(0, 2);
// graph.addEdge(0, 6);
// graph.addEdge(0, 5);
// graph.addEdge(6, 4);
// graph.addEdge(4, 5);
// graph.addEdge(4, 3);
// graph.addEdge(3, 5);


graph.addEdge(0, 4);
graph.addEdge(1, 0);
graph.addEdge(1, 4);
graph.addEdge(1, 7);
graph.addEdge(2, 0);
graph.addEdge(3, 6);
graph.addEdge(5, 0);
graph.addEdge(5, 1);
graph.addEdge(5, 2);

graph.topologySort();
// graph.breathFirstSearch(0);
// console.log(graph.pathTo(3));

console.log(graph);
