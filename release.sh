readonly npm_auth=$1

if [ -z "$npm_auth" ]; then
    echo "npm_auth is not provided. exit"
    exit 1
fi

cat <<EOF >> .npmrc
registry = https://registry.npmjs.org/
email = zhangjiahengpoping@gmail.com
always-auth = true
//registry.npmjs.org/@recklyss/hand-drawing-ui/:_authToken=$1
EOF
