.PHONY: nginx


prod:
	@docker-compose -f docker-compose-prod.yml up --build

dev:
	@docker-compose -f docker-compose.yml up --build

dev-hugo: 
	@hugo serve --source=./ -D --disableFastRender

DIR = ./data/projects

fetch-projects: 
	$(foreach file, $(wildcard $(DIR)/*), \
		@python tiret/write_repository.py -o clubcedille -r $(basename $(notdir $(file))) -u svc-cedille-user -t $(PAT_TOKEN) -y $(file) $(newline) \
	)

define newline


endef