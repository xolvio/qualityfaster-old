#!/bin/bash

chimpSwitches="\
   --path=tests/specifications \
   --domainSteps=tests/step_definitions/domain \
   --criticalSteps=tests/step_definitions/critical \
   --watchSource=tests \
   --singleSnippetPerFile=1 \
   --no-source \
   --watch \
   "

./node_modules/.bin/chimp $chimpSwitches --ddp=http://localhost:3000
