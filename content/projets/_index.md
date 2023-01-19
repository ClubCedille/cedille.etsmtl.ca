---
title: "Projets"
date: 2022-03-07T12:36:13-05:00
draft: false
---
## Comment contribuer aux divers projets

1. Clonez le projet localement sur votre machine en utilisant la commande git clone. Exemple : git clone https://github.com/ClubCedille/cedille.etsmtl.ca.git.

2. Ouvrez le projet cloné localement avec votre IDE préféré.

3. Créez une nouvelle branche qui inclura vos contributions en utilisant la commande git branch [branch_name] et ensuite git checkout [branch_name].

4. Effectuez vos modifications et livrez-les à votre branche en utilisant la commande git commit -am "décrivez vos modifications ici".

5. Poussez votre branche vers le dépôt distant en utilisant la commande git push -u origin [nom_de_branche]. Si c'est la première fois que vous poussez cette nouvelle branche, vous devez inclure le drapeau -u dans la commande afin que la branche locale puisse être configurée pour suivre en amont la branche distante.

6. Allez sur le site GitHub et naviguez jusqu'à votre branche. Cliquez sur le bouton "New pull request" pour ouvrir une nouvelle demande.

7. Remplissez le modèle de demande de retrait (pull request) avec une brève description de vos modifications et soumettez-le pour examen. Veillez à sélectionner au moins un membre du club pour examiner la demande.

8. Une fois que quelqu'un a examiné et approuvé votre demande, votre branche peut être fusionnée avec la branche principale en utilisant la commande git merge [branch_name].

Il est important de noter que vous devez toujours récupérer la version la plus récente du projet avant de commencer à travailler dessus et de mentionner ce que vous allez faire dans la demande de téléchargement. De plus, c'est une bonne idée d'utiliser une interface graphique git comme GitKraken ou SourceTree pour être plus à l'aise avec git, car c'est plus visuel.

Il est également important qu'un membre du club examine les demandes de retrait avant de les fusionner, afin de garantir la qualité du code et de maintenir les normes du projet. Cela permet également un processus de révision interne et peut aider à identifier les bogues ou les problèmes avant de fusionner le code dans la branche principale.
