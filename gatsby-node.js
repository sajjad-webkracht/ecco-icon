const path = require('path');
const fs = require('fs');

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions;

    const icons = JSON.parse(fs.readFileSync('./src/icons/metadata.json', 'utf-8'));

    icons.forEach(icon => {
        createNode({
            ...icon,
            id: createNodeId(`icon-${icon.name}`),
            internal: {
                type: 'Icon',
                contentDigest: createContentDigest(icon),
            },
        });
    });
};