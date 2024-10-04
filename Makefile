.PHONY: nginx

prod:
	@docker build -t clubcedille:prod .
	@docker run -it --rm -p 80:80 clubcedille:prod

dev:
	@docker build -t clubcedille:dev -f Dockerfile.dev .
	@docker run -it --rm -p 3000:3000 -v $(PWD):/src clubcedille:dev

dev-hugo: 
	@hugo serve --source=./ -D --disableFastRender

DIR = ./data/projects

fetch-projects: 
	$(foreach file, $(wildcard $(DIR)/**/*), \
		@python tiret/write_repository.py -o clubcedille -r $(basename $(notdir $(file))) -u svc-cedille-user -t $(PAT_TOKEN) -y $(file) $(newline) \
	)

define newline


endef