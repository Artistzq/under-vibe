.PHONY: help install dev prev build preview clean deploy

# 配置
PORT = 30066
DIST_PATH = vitepress/docs/.vitepress/dist
SERVER_USER = root
SERVER_PATH = /usr/share/nginx/html

# 默认显示帮助
help:
	@echo "Under Vibe 文档站 Makefile"
	@echo ""
	@echo "可用命令："
	@echo "  make install   - 安装依赖"
	@echo "  make dev       - 启动本地开发服务器 (端口 $(PORT))"
	@echo "  make prev      - 同上（预览别名）"
	@echo "  make build     - 构建生产版本"
	@echo "  make preview   - 预览构建后的版本"
	@echo "  make clean     - 清理构建产物"
	@echo "  make deploy    - 部署到服务器"
	@echo ""
	@echo "💡 部署前确保已设置环境变量："
	@echo "   ALIYUN_ECS_PUBLIC_IP  - 服务器公网IP"
	@echo "   ALIYUN_ECS_PASSWORD   - 服务器密码"

install:
	cd vitepress && npm install

dev: install
	cd vitepress && npm run dev -- --port $(PORT)

prev: install
	cd vitepress && npm run dev -- --port $(PORT)

build:
	cd vitepress && npm run build

preview: build
	cd vitepress && npm run preview -- --port $(PORT)

clean:
	rm -rf vitepress/docs/.vitepress/dist
	rm -rf vitepress/docs/.vitepress/cache

deploy: build
	@echo "🚀 开始部署到服务器..."
	@echo ""
	@echo "📦 检查构建产物..."
	@if [ ! -d "$(DIST_PATH)" ]; then \
		echo "❌ 构建产物不存在，请先执行 make build"; \
		exit 1; \
	fi
	@echo "✅ 构建产物确认"
	@echo ""
	@echo "🔍 检查环境变量..."
	@if [ -z "$$ALIYUN_ECS_PUBLIC_IP" ]; then \
		echo "❌ 请先设置 ALIYUN_ECS_PUBLIC_IP 环境变量"; \
		echo "   方式：export ALIYUN_ECS_PUBLIC_IP=你的服务器IP"; \
		exit 1; \
	fi
	@if [ -z "$$ALIYUN_ECS_PASSWORD" ]; then \
		echo "❌ 请先设置 ALIYUN_ECS_PASSWORD 环境变量"; \
		echo "   方式：export ALIYUN_ECS_PASSWORD=你的密码"; \
		exit 1; \
	fi
	@echo "✅ 环境变量确认"
	@echo ""
	@echo "📋 备份当前线上版本..."
	sshpass -p "$$ALIYUN_ECS_PASSWORD" ssh $(SERVER_USER)@$$ALIYUN_ECS_PUBLIC_IP "cp -r $(SERVER_PATH) $(SERVER_PATH).bak"
	@echo "✅ 备份完成（路径：$(SERVER_PATH).bak）"
	@echo ""
	@echo "📤 上传新文件..."
	sshpass -p "$$ALIYUN_ECS_PASSWORD" scp -r $(DIST_PATH)/* $(SERVER_USER)@$$ALIYUN_ECS_PUBLIC_IP:$(SERVER_PATH)/
	@echo "✅ 上传完成"
	@echo ""
	@echo "🏷️  写入版本信息..."
	sshpass -p "$$ALIYUN_ECS_PASSWORD" ssh $(SERVER_USER)@$$ALIYUN_ECS_PUBLIC_IP "echo 'Deployed at: $(shell date)' > $(SERVER_PATH)/VERSION"
	@echo "✅ 版本信息已写入"
	@echo ""
	@echo "🎉 部署完成！"
	@echo "🌐 访问地址：http://$$ALIYUN_ECS_PUBLIC_IP"
	@echo ""
	@echo "💡 回滚命令（如果出问题）："
	@echo "   sshpass -p \"\$$ALIYUN_ECS_PASSWORD\" ssh $(SERVER_USER)@$$ALIYUN_ECS_PUBLIC_IP 'cp -r $(SERVER_PATH).bak/* $(SERVER_PATH)/'"
