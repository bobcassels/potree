/**
 * @author Connor Manning
 */

export class EptLoader {
        static async load(file, urlSigner, callback) {

                let response = await fetch(urlSigner(file));
		let json = await response.json();

		let url = file.substr(0, file.lastIndexOf('ept.json'));
                let geometry = new Potree.PointCloudEptGeometry(url, urlSigner, json);
		let root = new Potree.PointCloudEptGeometryNode(geometry);

		geometry.root = root;
		geometry.root.load();

		callback(geometry);
	}
};

