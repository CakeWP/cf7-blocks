PLAN="$1"
RELEASE_VERSION="$2"
CHANGELOG=$(cat changelog-tmp.txt)

# Replacing premium tag prefix.
RELEASE_VERSION="${RELEASE_VERSION/-premium/}"

CURRENT_DATE=$(date '+%Y/%m/%d')

FILENAME=""

# Obtaining changelog file to update.
if [[ $PLAN == 'free' ]]; then
    FILENAME="changelog.md"
fi

if [[ $PLAN == 'pro' ]]; then
    FILENAME="changelog-pro.md"
fi

if [[ ! -f "$FILENAME" ]]; then
    echo 'Changelog file not found.'
    exit 1
fi

# Assuming everything went correctly, due to the checks above.
echo "## **$RELEASE_VERSION ($CURRENT_DATE)** \n$CHANGELOG\n" >>"$FILENAME"
